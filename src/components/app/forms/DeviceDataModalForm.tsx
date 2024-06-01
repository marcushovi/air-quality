import {
  Button,
  Group,
  Modal,
  NumberInput,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";

interface DeviceModalFormProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (values: DeviceFormValues) => void;
  initialValues?: DeviceFormValues;
}

export interface DeviceFormValues {
  device_id: string;
  serial_number: string;
  name: string;
  location: string;
  co2_green: number;
  co2_yellow: number;
  co2_red: number;
}

const validateCO2Levels = (values: {
  co2_green: number;
  co2_yellow: number;
  co2_red: number;
  serial_number: string | any[];
}): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (values.co2_green >= values.co2_yellow) {
    errors.co2_green = "CO2 Green level must be lower than CO2 Yellow level";
  }
  if (values.co2_yellow >= values.co2_red) {
    errors.co2_yellow = "CO2 Yellow level must be lower than CO2 Red level";
  }
  if (values.serial_number.length < 14) {
    errors.serial_number = "Serial number must be at least 14 characters long";
  }
  return errors;
};

const DeviceDataModalForm = ({
  opened,
  onClose,
  onSubmit,
  initialValues,
}: DeviceModalFormProps) => {
  const form = useForm<DeviceFormValues>({
    initialValues: {
      device_id: "",
      serial_number: "",
      name: "",
      location: "",
      co2_green: 500,
      co2_yellow: 1000,
      co2_red: 1500,
    },
    validate: validateCO2Levels,
  });

  useEffect(() => {
    form.setValues({
      device_id: initialValues?.device_id || "",
      serial_number: initialValues?.serial_number || "",
      name: initialValues?.name || "",
      location: initialValues?.location || "",
      co2_green: initialValues?.co2_green || 500,
      co2_yellow: initialValues?.co2_yellow || 1000,
      co2_red: initialValues?.co2_red || 1500,
    });
    form.resetDirty();
  }, [initialValues]);

  return (
    <Modal
      opened={opened}
      onClose={() => {
        form.reset();
        form.resetDirty();
        onClose();
      }}
      title={initialValues ? "Edit device" : "Add device"}
    >
      <form
        onSubmit={form.onSubmit((values) => {
          onSubmit(values);
          form.reset();
          form.resetDirty();
        })}
      >
        <TextInput label="Name" {...form.getInputProps("name")} required />
        <TextInput
          label="Serial Number"
          disabled={!!initialValues}
          {...form.getInputProps("serial_number")}
          required
        />
        <TextInput
          label="Location"
          {...form.getInputProps("location")}
          required
        />
        <NumberInput
          label="CO2 Green Level"
          {...form.getInputProps("co2_green")}
          required
        />
        <NumberInput
          label="CO2 Yellow Level"
          {...form.getInputProps("co2_yellow")}
          required
        />
        <NumberInput
          label="CO2 Red Level"
          {...form.getInputProps("co2_red")}
          required
        />
        <Group justify="flex-end" mt="md">
          <Tooltip
            label="Update the form first"
            events={{
              hover: !form.isDirty(),
              focus: !form.isDirty(),
              touch: !form.isDirty(),
            }}
          >
            <Button type="submit" disabled={!form.isDirty()}>
              Save changes
            </Button>
          </Tooltip>
        </Group>
      </form>
    </Modal>
  );
};

export default DeviceDataModalForm;
