import './content.css';

function abc(){
    return(
        <div>
        <table className='tables'>
            <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>Section</th>
                <th>CGPA</th>
                <th>Contact</th>
            </tr>
            <tr>
                <td>ESWARAN</td>
                <td>CSE</td>
                <td>A</td>
                <td>7.6</td>
                <td>6380779532</td>
            </tr>
            <tr>
                <td>Divith</td>
                <td>CSE</td>
                <td>A</td>
                <td>8.5</td>
                <td>7582454432</td>
            </tr>
            <tr>
                <td>Sathish</td>
                <td>CSE</td>
                <td>C</td>
                <td>9.6</td>
                <td>9874563201</td>
            </tr>
        </table>
        <div className='eee'>
         <form>
            <label>User Name:</label>
            <input></input>
            <label>Password:</label>
            <input></input>
         </form>
         </div>
         <button>SUBMIT</button>
         <button>CANCEL</button>
    </div>
    );
}
export default abc;