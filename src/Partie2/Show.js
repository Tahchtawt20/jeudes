
var style = {border:"2px  black"}

function Show({student}) {
    return (
      <table style={style}>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Filiére</th>
            <th>Age</th>
          </tr>     
          {student.map(st => (
            <tr>
              <td style={style} >{st.nom}</td>
              <td style={style} >{st.prenom}</td>
              <td style={style} >{st.filiere}</td>
              <td style={style} >{st.age}</td>
            </tr>
          ))}
        
      </table>
    );
  }

  export default Show 