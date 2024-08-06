export const fetchData = async (url: string) => {
  // const timeDelay=await new Promise((resolve)=>setTimeout(resolve,10000))
  const res = await fetch(url, {
    next: {
      revalidate: 6 * 1000,
    },
  });
  return res.json();
};
