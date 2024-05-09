describe('GET LOCATION DISTANCE', () => {
    let geodistance: GeoLocationDistance;
  
    // diferença de 950 m
    // -22.40083454639946, -47.56297832084271
    // -22.392504686710215, -47.565024241120355
  
    // 21.64 Km
    // -22.545298697864474, -47.42180754266027
    // -22.400830790167916, -47.562983198639216
  
    const coordinateA1: Coordinates = {
      latitude: -22.40083454639946,
      longitude: -47.56297832084271,
    };
  
    const coordinateA2: Coordinates = {
      latitude: -22.392504686710215,
      longitude: -47.565024241120355,
    };
  
    const coordinateB1: Coordinates = {
      latitude: -22.545298697864474,
      longitude: -47.42180754266027,
    };
    const coordinateB2: Coordinates = {
      latitude: -22.400830790167916,
      longitude: -47.5629831986392165,
    };
  
    beforeAll(() => {
      geodistance = new GeoLocationDistance();
    });
    it('Should return a distace once given 2 coordenates', async () => {
      const result = geodistance.getDistance(coordinateA1, coordinateA2);
      expect(result).toBeCloseTo(0.95);
    });
  
    it('Should return a distace once given 2 coordenates', async () => {
      const result = geodistance.getDistance(coordinateB1, coordinateB2);
      expect(result).toBeCloseTo(21.64);
    });
  });