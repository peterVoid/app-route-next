export const getData = async (props: any) => {
  const dt = await fetch(props, {
    cache: "no-store",
    next: {
      revalidate: 30,
      // tags: ["cars"],
    },
  });
  if (!dt.ok) {
    throw new Error("a");
  }

  return dt.json();
};
