import React from 'react';

export default function EmployeesTable(props) {
    return (
        <ul className='grid-wrapper'>
            <li className='grid-block'>
                <div className='grid-block__item'>Name</div>
                <div className='grid-block__item'>Employees ID</div>
                <div className='grid-block__item'>Email ID</div>
                <div className='grid-block__item'>Mobile</div>
                <div className='grid-block__item'>Joining Date</div>
                <div className='grid-block__item'>Role</div>
                <div className='grid-block__item'>Action</div>
            </li>
            {props?.employees.map((data, index) => (
                <li className='grid-block' key={index}>
                    <div className='grid-block__item'>
                        <div className='profile-block'>
                            <div className='profile-block__image'>
                                <span>
                                    <img src={data.avatar} alt='profile' />
                                </span>
                            </div>
                            <div className='profile-block__text'>
                                <h3>{data.name}</h3>
                                <p>{data.role}</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid-block__item'>{data.employeeId}</div>
                    <div className='grid-block__item'>{data.email}</div>
                    <div className='grid-block__item'>{data.mobile}</div>
                    <div className='grid-block__item'>{data.joiningDate}</div>
                    <div className='grid-block__item'>{data.role}</div>
                    <div className='grid-block__item'>
                        <i className='fas fa-ellipsis-v'></i>
                    </div>
                </li>
            ))}
        </ul>
    );
}

// <div className='card-footer'>
//     <ul className='pagination'>
//         <li className='page-item'>
//             <a className='page-link' href='#'>
//                 Previous
//             </a>
//         </li>
//         <li className='page-item'>
//             <a className='page-link' href='#'>
//                 1
//             </a>
//         </li>
//         <li className='page-item'>
//             <a className='page-link' href='#'>
//                 2
//             </a>
//         </li>
//         <li className='page-item'>
//             <a className='page-link' href='#'>
//                 3
//             </a>
//         </li>
//         <li className='page-item'>
//             <a className='page-link' href='#'>
//                 Next
//             </a>
//         </li>
//     </ul>
// </div>

// <table classNameName={''}>
//     <thead>
//         <tr>
//             <td>id</td>
//             <td>avatar</td>
//             <td>first_name</td>
//             <td>last_name</td>
//             <td>email</td>
//         </tr>
//     </thead>
//     <tbody>
//         {props?.employees.map((data, index) => {
//             return (
//                 <tr key={index}>
//                     <td>{data.id}</td>
//                     <td>{data.avatar}</td>
//                     <td>{data.first_name}</td>
//                     <td>{data.last_name}</td>
//                     <td>{data.email}</td>
//                 </tr>
//             );
//         })}
//     </tbody>
// </table>
