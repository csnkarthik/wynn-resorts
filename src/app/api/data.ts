import { client} from '@/lib/contentful/client';

//Get all information of restaurants
export async function getRestaurants() {
  return client.getEntries({'content_type': 'diningPage'})
    .then(entries => entries.items)
    .catch(console.error);
}

//Get content for Dining Page
export async function getInfoDiningPage() {
  return client.getEntries({'content_type': 'diningListPage'})
    .then(entries => entries.items[0].fields)
    .catch(console.error);
}

//Get categories of the dining
export async function getRestaurantsCategories() {
  return client.getEntries({'content_type': 'category'})
    .then(entries => entries.items[0].fields)
    .catch(console.error);
}

//Get detail of a restaurant
export async function getRestaurant(params: any) {
  return client.getEntries({
    'content_type': 'diningPage',
    'fields.slug': params.slug,
  })
    .then(entries => entries.items[0])
    .catch(console.error);
}
