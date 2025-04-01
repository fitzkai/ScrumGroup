import { useState } from 'react';
import { DiscussionItem } from '../types/DiscussionItem';
import { User } from '../types/User';
import { addDiscussionItem } from '../api/DiscussionsAPI';
interface NewDiscussionItemFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}
const NewDiscussionItemForm = ({
  onSuccess,
  onCancel,
}: NewDiscussionItemFormProps) => {
  const [formData, setFormData] = useState<DiscussionItem>({
    discussionId: 0,
    userId: 0,
    user: {
      userId: 0,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      religionId: 1,
      religion: { religionID: 1, religionName: '', category: '', overview: '' },
    }, // Assuming User has these properties
    response: '',
    timeposted: new Date().toISOString(), // Ensure a valid timestamp
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === 'userId' || name === 'discussionId'
          ? parseInt(value) || 0
          : value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    await addDiscussionItem(formData);
    onSuccess();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Discussion Item</h2>
      <div className="form-grid">
        <label>
          userId:
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
        </label>
        <label>
          Discussion Text:
          <input
            type="text"
            name="response"
            value={formData.response}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Discussion Item</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default NewDiscussionItemForm;
