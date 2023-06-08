import { client } from '@/lib/contentful/client';

export async function getRestaurants() {
  const res = await client.getEntries({ content_type: 'diningPage' })
  return res.items;
}

export async function getInfoDiningPage() {
  const res = await client.getEntries({ content_type: 'diningListPage' })
  return res.items[0].fields;
}

export async function getMeuList() {
  const res = await client.getEntries({ content_type: 'menuPage' })
  return res.items;
}

export async function getRestaurantsCategories() {
  const res = await client.getEntries({ content_type: 'category' })
  return res.items[0].fields;
}