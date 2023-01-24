import Datatable from "../../../components/datatable/Datatable";
import { dataGridUsers } from "../../../helpers/dataSource/dataGridUsers";

import "./users.scss";

const Users = () => {
  return (
    <div className="users">
      <Datatable data={dataGridUsers} rowsperpage={14} />
    </div>
  );
};
export default Users;
