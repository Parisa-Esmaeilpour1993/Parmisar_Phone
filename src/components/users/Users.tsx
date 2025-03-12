import { useEffect, useState } from 'react';
import {
  asidebarlocalization,
  UserLocalization,
} from '../../constants/localization/Localization';
import axios from 'axios';
import { ORDER_BASE_URL } from '../Sevices/OrderURL/OrderURL';
import { UserProps } from '../../interfaces/interfaces';

export default function Users({ searchQuery }: { searchQuery: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserProps[]>([]);
  const [filteredUser, setFilteredUser] = useState<UserProps[]>([]);
  const [noResult, setNoResults] = useState(false);

  async function getUsers() {
    setIsLoading(true);
    try {
      const response = await axios.get(`${ORDER_BASE_URL}/Orders`);
      setUser(response.data);
      setFilteredUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredUser(user);
      setNoResults(false);
    } else {
      const filtered = user.filter(user =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUser(filtered);
      setNoResults(filtered.length === 0);
    }
  }, [searchQuery, user]);

  return (
    <div className="px-16 mt-12 text-right font-vazir">
      <p className="font-semibold text-xl">{asidebarlocalization.users}</p>

      {isLoading ? (
        <div className="flex justify-center items-center mt-4">
          <span className="text-lg font-semibold">
            {UserLocalization.loading}
          </span>
          <div className="ml-2 border-t-4 border-primary-200 w-8 h-8 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-y-auto max-h-[24rem] mt-4 flex flex-row-reverse">
          <table className="min-w-fit bg-white text-center shadow-md rounded-lg border-collapse">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  {UserLocalization.phoneNumber}
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  {UserLocalization.firstName}
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  {UserLocalization.lastName}
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  {UserLocalization.userName}
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-center">
                  {UserLocalization.id}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.length > 0 ? (
                filteredUser.map(user => (
                  <tr key={user.id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-8 text-center font-number">
                      {user.phoneNumber}
                    </td>
                    <td className="py-3 px-4 text-center">{user.firstName}</td>
                    <td className="py-3 px-4 text-center">{user.lastName}</td>
                    <td className="py-3 px-4 text-center text-red-400 font-semibold">
                      {user.userName}
                    </td>
                    <td className="py-3 px-4 text-center font-semibold">
                      {user.id}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    {UserLocalization.noDataToShow}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {noResult && (
        <p className="text-center text-red-500 mt-4">
          {UserLocalization.noUserToShow}
        </p>
      )}
    </div>
  );
}
