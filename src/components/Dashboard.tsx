import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  id: number;
  name: string;
  description: string;
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/projects', {
      headers: { Authorization: Bearer ${token} }
    })
    .then(res => setProjects(res.data))
    .catch(() => console.log("Không thể tải danh sách project"));
  }, []);

  return (
    <div className="bg-white p-8 shadow-xl rounded-xl w-[600px]">
      <h1 className="text-2xl font-bold mb-4">Danh sách dự án</h1>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="border p-3 rounded-md">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-600 text-sm">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
