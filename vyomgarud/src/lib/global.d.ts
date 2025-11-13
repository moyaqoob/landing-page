export interface DronePerformance {
  flightTime: string
  range: string
  cruiseSpeed: string
  topSpeed: string
  ceiling: string
  windResistance: string
  operatingTemperature: string
}

export interface Drone {
  id: string
  name: string
  role: string
  image: string
  performance: DronePerformance
}
