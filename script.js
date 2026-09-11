let students = [];
let editId = null;

const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const addressInput = document.getElementById("address");
const addBtn = document.getElementById("addBtn");

const API_URL =
    "https://crudcrud.com/api/8c7e0973052348f582085e2caf9a0809";

const STUDENT_URL =
    `${API_URL}/students`;

const headers = {
    "Content-Type": "application/json"
};

// GET - Load or Get all Existing students

async function loadStudents() {
    try {
        const response = await fetch(
            STUDENT_URL,
            {
                method: "GET",
                headers: headers
            }
        );
        if (!response.ok) {
            const error = await response.text();
            console.error("GET error:", error);
            alert("Failed to load students");
            return;
        }
        students = await response.json();
        renderStudents();
    } catch (error) {
        console.error("GET error:", error);
        alert("Unable to load students");
    }
}

// Update student count

function updateCount() {
    document.getElementById("studentCount").textContent =
        students.length;

    document.getElementById("studentCountTop").textContent =
        students.length;
}

// Display students

function renderStudents() {
    const studentList =
        document.getElementById("studentList");
    studentList.innerHTML = "";
    students.forEach((student) => {
        studentList.innerHTML += `
            <div class="student-card">
                <p>
                    <strong>Name:</strong>
                    ${student.name}
                </p>
                <p>
                    <strong>Mobile:</strong>
                    ${student.mobile}
                </p>
                <p>
                    <strong>Address:</strong>
                    ${student.address}
                </p>
                <div class="actions">
                    <button
                        class="edit-btn"
                        onclick="editStudent('${student._id}')">
                        Edit
                    </button>
                    <button
                        class="delete-btn"
                        onclick="deleteStudent('${student._id}')">
                        Delete
                    </button>
                </div>
            </div>
        `;
    });
    updateCount();
}

// ADD OR UPDATE student

addBtn.addEventListener("click", async () => {
    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const address = addressInput.value.trim();

    // Check fields
    if (!name || !mobile || !address) {
        alert("Please fill all fields");
        return;
    }

    // Student data
    const studentData = {
        name: name,
        mobile: mobile,
        address: address
    };

    // ADD STUDENT
	
    if (editId === null) {
        try {
            const response = await fetch(
                STUDENT_URL,
                {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(studentData)
                }
            );
            if (!response.ok) {
                const error = await response.text();
                console.error("POST error:", error);
                alert("Failed to add student");
                return;
            }
        } catch (error) {
            console.error("POST error:", error);
            alert("Unable to add student");
            return;
        }
    }
	
    // UPDATE STUDENT
	
    else {
        try {
            const response = await fetch(
                `${STUDENT_URL}/${editId}`,
                {
                    method: "PUT",
                    headers: headers,
                    body: JSON.stringify(studentData)
                }
            );
            if (!response.ok) {
                const error = await response.text();
                console.error("PUT error:", error);
                alert("Failed to update student");
                return;
            }

            // Exit edit mode
            editId = null;
            addBtn.textContent = "Add Student";
        } catch (error) {
            console.error("PUT error:", error);
            alert("Unable to update student");
            return;
        }
    }
    nameInput.value = "";
    mobileInput.value = "";
    addressInput.value = "";
    await loadStudents();
});

// EDIT STUDENT

function editStudent(id) {
    const student = students.find(
        s => s._id === id
    );
    if (!student) {
        return;
    }
    nameInput.value = student.name;
    mobileInput.value = student.mobile;
    addressInput.value = student.address;
    editId = id;
    addBtn.textContent = "Update Student";
}

// DELETE STUDENT

async function deleteStudent(id) {
    if (!confirm("Delete this student?")) {

        return;
    }
    try {
        const response = await fetch(
            `${STUDENT_URL}/${id}`,
            {
                method: "DELETE",
                headers: headers
            }
        );
        if (!response.ok) {
            const error = await response.text();
            console.error("DELETE error:", error);
            alert("Failed to delete student");
            return;
        }
        await loadStudents();
    } catch (error) {
        console.error("DELETE error:", error);
        alert("Unable to delete student");
    }
}

// LOAD STUDENTS ON PAGE LOAD

loadStudents();
// THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "beige") {
    document.body.classList.add("beige-theme");
}

// Change theme
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("beige-theme");

    if (document.body.classList.contains("beige-theme")) {
        localStorage.setItem("theme", "beige");
    } else {
        localStorage.setItem("theme", "blue");
    }
});