import { DiscussionItem } from '../types/DiscussionItem';
interface FetchDiscussionItemsResponse {
  DiscussionItems: DiscussionItem[];
}
const API_URL = 'https://localhost:5000/Religion';
export const fetchDiscussionItems =
  async (): Promise<FetchDiscussionItemsResponse> => {
    try {
      const response = await fetch(`${API_URL}/AllDiscussions`, {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch discussions');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching discussions: ', error);
      throw error;
    }
  };
export const addDiscussionItem = async (
  newDiscussionItem: DiscussionItem
): Promise<DiscussionItem> => {
  try {
    const response = await fetch(`${API_URL}/AddDiscussionItem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDiscussionItem),
    });
    if (!response.ok) {
      throw new Error('Failed to add discussionItem');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding project', error);
    throw error;
  }
};
