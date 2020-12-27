function Tag(){
    const data = [
        { company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany'},
        { company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
        { company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria' },
        { company: 'Island Trading', contact: 'Helen Bennett', country: 'UK' },
        { company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada' },
        { company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy' }
      ];

    return (
       <table border="solid">
            <thead>
                <tr>
                    <th><h3>Company</h3></th>
                    <th><h3>Contact</h3></th>
                    <th><h3>Country</h3></th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((item, index) => 
                <tr key={ index }>
                    <td>{ item.company }</td>
                    <td>{ item.contact }</td>
                    <td>{ item.country }</td>
                </tr> )
            }
            </tbody>
       </table>
    );
}

export default Tag;
