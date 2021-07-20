export const initSearch = async () => {
  try {
    const response = await fetch("https://front-test.beta.aviasales.ru/search");
    const json = await response.json();
    return json.searchId;
  } catch (e) {
    console.log(e);
  }
};

export const getTickets = async (searchId: any) => {
  try {
    const response = await fetch(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );
    const json = await response.json();
    return json.tickets;
  } catch (e) {
    console.log(e);
  }
};
