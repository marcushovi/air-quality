"use client"

import { Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from "./DeviceTable.module.css"
import { useDevices } from '@/components/Contexts/DeviceContext';

export function DeviceTable() {

  const { devices } = useDevices();

  const rows = devices.map((row) => {
    // const qualityIndex = 33 //TODO
    // const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    // const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <Table.Tr key={row.name}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.name}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.serial_number}</Table.Td>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.location}
          </Anchor>
        </Table.Td>
        {/* <Table.Td>{Intl.NumberFormat().format(qualityIndex)}</Table.Td>
        <Table.Td>
          <Group justify="space-between">
            <Text fz="xs" c="teal" fw={700}>
              {qualityIndex.toFixed(0)}%
            </Text>
            <Text fz="xs" c="red" fw={700}>
              {qualityIndex.toFixed(0)}%
            </Text>
          </Group>
          <Progress.Root>
            <Progress.Section
              className={classes.progressSection}
              value={qualityIndex}
              color="teal"
            />

            <Progress.Section
              className={classes.progressSection}
              value={qualityIndex}
              color="red"
            />

            <Progress.Section
              className={classes.progressSection}
              value={qualityIndex}
              color="yellow"
            />
          </Progress.Root>
        </Table.Td> */}
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Device name</Table.Th>
            <Table.Th>Serial number</Table.Th>
            <Table.Th>Location</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}