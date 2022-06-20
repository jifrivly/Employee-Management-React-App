export function getEmployees(state, payload) {
    return { ...state };
}

export function createEmployee(state, payload) {
    return {
        ...state,
        employeeList: {
            employees: [
                ...state.employeeList.employees,
                { ...payload, employeeId: createUniqueEmpId(state.employeeList.employees) },
            ],
            error: false,
            loading: false,
        },
    };
}

function createUniqueEmpId(employees = []) {
    const ids = employees.map((emp) => emp.employeeId);
    return ids.length ? '00' + (Number(ids.sort((a, b) => b - a)[0]) + 1) : '001';
}

export function updateEmployee(state, payload) {
    return {
        ...state,
        employeeList: {
            employees: state.employeeList.employees.map((employee, i) =>
                employee.id === payload.id
                    ? {
                          ...employee,
                          email: payload.email,
                          name: payload.name,
                          avatar: payload.avatar,
                          employeeId: payload.employeeId,
                          mobile: payload.mobile,
                          joiningDate: payload.joiningDate,
                          role: payload.role,
                      }
                    : employee
            ),
            loading: false,
            error: false,
        },
    };
}

export function deleteEmployee(state, payload) {
    return {
        ...state,
        employeeList: {
            employees: state.employeeList.employees.filter((item) => item.id !== payload),
            loading: false,
            error: false,
        },
    };
}
