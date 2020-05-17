import axios from "axios";

const url1 = "https://api.covid19api.com/summary";
const url2 = "https://covid19.mathdro.id/api/";

export const fetchGlobalData = async () => {
  try {
    //destructing
    const { data } = await axios.get(url2);

    const globalData = {
      TotalConfirmed: data.confirmed?.value,
      TotalDeaths: data.deaths?.value,
      TotalRecovered: data.recovered?.value,
    };

    return globalData;
  } catch (error) {}
};

//function to get last n values from array
const lastFromArray = (array, n) => {
  if (array == null) return void 0;
  if (n == null) return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

export const fetchWeeklyData = async () => {
  try {
    const { data } = await axios.get(url2 + "daily");

    const reqData = data.map((dData) => ({
      confirmed: dData.confirmed?.total,
      deaths: dData.deaths?.total,
      date: new Date(dData.reportDate).toDateString().slice(3, 10),
    }));

    const sevenDaysData = lastFromArray(reqData, 7);

    return sevenDaysData;
  } catch (error) {}
};
export const fetchTopCountryData = async () => {
  try {
    const {
      data: { Countries },
    } = await axios.get(url1);

    const fiveCountriesData = Countries?.sort((a, b) => {
      return a.TotalConfirmed - b.TotalConfirmed;
    }).slice(-5);

    return fiveCountriesData;
  } catch (error) {}
};
export const fetchAllCountry = async () => {
  try {
    const {
      data: { Countries },
    } = await axios.get(url1);
    return Countries;
  } catch (error) {}
};

export const listCountry = async () => {
  const {
    data: { countries },
  } = await axios.get(url2 + "countries");
  return countries.map((country) => country.name);
};
