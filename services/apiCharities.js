import supabase from "./supabase";

export async function getAllCharities() {
  const { data, error } = await supabase.from("charities").select("*");

  if (error) throw new Error("Charities could not be found!");

  return data;
}
