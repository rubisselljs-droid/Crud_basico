import  { useState,useEffect} from "react";
import { supabase } from "./CreateClient";




export default function App() {


  const [users, setUsers] = useState([]);

  

  async function fetchUsers() {
    const {data}= await supabase
      .from('users')
      .select('*')
      setUsers(data)
      console.log(data);
  

    
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr> 
           <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

      </table>
    </div>
  );
}