import { DonutChart, LineChart } from "@mantine/charts";
import { Center, Container, Space, Title } from "@mantine/core";
import { useMemo } from "react";

function calculateIndividualAQI(
  concentration: number,
  lowConcentration: number,
  highConcentration: number,
  lowIndex: number,
  highIndex: number
) {
  return (
    ((highIndex - lowIndex) / (highConcentration - lowConcentration)) *
      (concentration - lowConcentration) +
    lowIndex
  );
}

function calculateAQI(data: any[]) {
  return data.map((dataPoint) => {
    const co2Aqi = calculateIndividualAQI(dataPoint.CO2, 400, 500, 0, 50);
    const vocAqi = calculateIndividualAQI(dataPoint.VOC, 100, 150, 0, 50);
    const noxAqi = calculateIndividualAQI(dataPoint.NOx, 20, 50, 0, 50);

    // Simplified AQI calculation: taking the max of the calculated AQIs
    const maxAqi = Math.max(co2Aqi, vocAqi, noxAqi);

    return { ...dataPoint, AQI: Math.round(maxAqi) };
  });
}

const DevicePage = ({ params }: { params: { device_id: string } }) => {
  const data = useMemo(() => {
    const dataPoints = [];
    let baseTime = new Date(); // Capture today's date
    baseTime.setHours(0, 0, 0, 0); // Reset to midnight

    for (let i = 0; i < 288; i++) {
      const time = new Date(baseTime.getTime() + i * 300000); // Calculate the time for this iteration
      dataPoints.push({
        date: time.toISOString().slice(11, 16), // HH:mm format
        CO2: Math.floor(400 + Math.random() * 100), // Random CO2 levels between 400 and 500 ppm
        VOC: Math.floor(100 + Math.random() * 50), // Random VOC levels between 100 and 150 ppb
        NOx: Math.floor(20 + Math.random() * 30), // Random NOx levels between 20 and 50 ppb
        Temperature: Math.floor(20 + Math.random() * 10), // Random Temperature between 20°C and 30°C
        Humidity: Math.floor(30 + Math.random() * 40), // Random Humidity between 30% and 70%
      });
    }

    return dataPoints;
  }, []);

  const dataWithAQI = calculateAQI(data);

  return (
    <>
      <h1>Device ID: {params.device_id}</h1>
      <Container>
        <Center>
          <Title order={2}>Air Quality Index</Title>
          <Space h="md" />
          <DonutChart
            strokeWidth={0}
            thickness={30}
            data={[
              {
                name: "Air Quality Index",
                value: dataWithAQI[dataWithAQI.length - 1].AQI,
                color: "green.6",
              },
            ]}
            chartLabel={dataWithAQI[dataWithAQI.length - 1].AQI}
            strokeColor="var(--card-bg)"
          />
          <LineChart
            h={300}
            data={dataWithAQI}
            dataKey="date"
            series={[{ name: "AQI", color: "gray.6" }]}
            curveType="monotone"
            withLegend
            legendProps={{ verticalAlign: "bottom", height: 50 }}
            dotProps={{ r: 0 }}
            lineChartProps={{ syncId: "air" }}
            referenceLines={[
              { y: 0, label: "Good ↑ (less is better)", color: "green.6" },
              { y: 51, label: "Moderate ↑", color: "yellow.6" },
              { y: 101, label: "Unhealthy ↑", color: "orange.6" },
              { y: 201, label: "Very Unhealthy ↑", color: "red.6" },
              { y: 301, label: "Hazardous ↑", color: "red.6" },
            ]}
          />
        </Center>
      </Container>

      <Space h="lg" />

      <Title order={2}>CO2</Title>
      <Space h="md" />
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: "CO2", color: "blue.6" }]}
        curveType="monotone"
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        dotProps={{ r: 0 }}
        lineChartProps={{ syncId: "air" }}
      />
      <Space h="md" />
      <Title order={2}>VOC</Title>
      <Space h="md" />
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: "VOC", color: "green.6" }]}
        curveType="monotone"
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        dotProps={{ r: 0 }}
        lineChartProps={{ syncId: "air" }}
      />
      <Space h="md" />
      <Title order={2}>NOx</Title>
      <Space h="md" />
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: "NOx", color: "red.6" }]}
        curveType="monotone"
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        dotProps={{ r: 0 }}
        lineChartProps={{ syncId: "air" }}
      />
      <Space h="md" />
      <Title order={2}>Tempreture</Title>
      <Space h="md" />
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: "Temperature", color: "orange.6" }]}
        curveType="monotone"
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        dotProps={{ r: 0 }}
        lineChartProps={{ syncId: "air" }}
      />
      <Space h="md" />
      <Title order={2}>Humidity</Title>
      <Space h="md" />
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[{ name: "Humidity", color: "blue.6" }]}
        curveType="monotone"
        withLegend
        legendProps={{ verticalAlign: "bottom", height: 50 }}
        dotProps={{ r: 0 }}
        lineChartProps={{ syncId: "air" }}
      />
    </>
  );
};

export default DevicePage;
