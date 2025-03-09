export const getStatusColor = (status: string) => {
  switch (status) {
    case "inStock":
      return "bg-green-200 text-green-700";
    case "outOfStock":
      return "bg-red-200 text-red-700";
    case "comingSoon":
      return "bg-yellow-200 text-yellow-700";
    case "discontinue":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
