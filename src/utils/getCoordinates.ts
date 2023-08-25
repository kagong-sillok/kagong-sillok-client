export function getCoordinates(map: kakao.maps.Map) {
  const center = map.getCenter();
  const latitude = center.getLat();
  const longitude = center.getLng();
  const latitudeBound = map.getBounds().getNorthEast().getLat() - latitude;
  const longitudeBound = map.getBounds().getNorthEast().getLng() - longitude;

  return {
    latitude,
    longitude,
    latitudeBound,
    longitudeBound,
  };
}
