import React, { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { toast } from 'react-toastify';
import { UserData } from 'src/interfaces'
import axios from "axios";
import { SearchBox } from "src/components/searchBox";

const BASE_URL= 'http://localhost:8080'

const columns: TableColumn<UserData>[] = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Age/Sex",
    selector: (row) => `${row.age} / ${row.sex}`,
  },
  {
    name: "Mobile",
    selector:  (row) => row.mobile,
  },
  {
    name: "Address",
    selector:  (row) => row.address,
  },
  {
    name: "Govt ID",
    selector:  (row) => row.govId,
  },
  {
    name: "Guardian Details",
    selector: (row) => `${row.guardianName} (${row.guardianType})`
  },
  {
    name: "Nationality",
    selector:  (row) => row.nationality,
  },
];

const UsersList = () =>{
  const [users, setUsers] = useState<null | UserData[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);

  const getUsersListService = () => {
    axios.get(`${BASE_URL}/api/data`)
    .then(response => {
      const mappedData = response.data.map((item: any) => ({
        name: item.name,
        age: item.age,
        sex: item.sex,
        mobile: item.mobile,
        address: item.address,
        govId: item.govt_id_no,
        guardianName: item.guardian_name,
        guardianType: item.guardian_type,
        nationality: item.country,
      }));

      setUsers(mappedData);      
      toast.success('Users Fetch Successfully')
      setIsLoading(false)
    })
    .catch(error => {
      toast.error(error);
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getUsersListService() 
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text) {
      const filtered = users?.filter(user => user.name.toLowerCase().includes(text.toLowerCase())) || [];
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  }

  return (
    <div>
      <h3>Users</h3>
      {isLoading ? (
        <p>Loading...</p>
      ):(
        <>
        <SearchBox placeholder="Search by name" value={searchText} handleChange={handleSearch} setSearchText={setSearchText} />
        <DataTable
          columns={columns}
          data={searchText ? filteredUsers : users || []}
          pagination
          highlightOnHover
          striped
        />
        </>
     )}
    </div>
  );
}

export default UsersList;
