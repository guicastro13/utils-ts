export class GeoLocationDistance {
    private EARTH_RADIUS_KM = 6371;
    constructor() {}
  
    getDistance(coordinateA: Coordinates, coordinateB: Coordinates) {
      //Fórmula de haversine
      const { latitude: point1A, longitude: point2A } = coordinateA;
      const { latitude: point1B, longitude: point2B } = coordinateB;
  
      const lat1Rad = point1A * (Math.PI / 180);
      const lon1Rad = point2A * (Math.PI / 180);
      const lat2Rad = point1B * (Math.PI / 180);
      const lon2Rad = point2B * (Math.PI / 180);
  
      const dLat = lat2Rad - lat1Rad;
      const dLon = lon2Rad - lon1Rad;
  
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.asin(Math.sqrt(a));
      const distance = this.EARTH_RADIUS_KM * c;
  
      return distance;
    }
  
    formatDistance(distanceInKM: number) {
      const distanceInMeters = distanceInKM * 1000;
      if (distanceInKM < 1) {
        return `${distanceInMeters.toFixed(0)} m`;
      } else {
        return `${distanceInKM.toFixed(2)} km`;
      }
    }
}