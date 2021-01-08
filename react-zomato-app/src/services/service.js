import Axios from "axios";

export const search = (searchQuery) => {
  return Axios({
    method: "GET",
    url: "https://developers.zomato.com/api/v2.1/search",
  
    headers: {
      "user-key": "07b5c5394656c7fd59d2acd506e2759b",
      "content-type": "application/json",
    },
  });
};

export const cuisineSearch = ((cuisineSearch) => {
    const cityId = 12023;
    if (cityId !== "") {
      return Axios.get(
          `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=subzone&cuisines=${cuisineSearch}`,
   
          {
            headers: {
              "user-key": "07b5c5394656c7fd59d2acd506e2759b",
              "content-type": "application/json",
            },
          }
        );
    }
  });
