import { api } from "@/lib/api";
import { Aluno } from "@/types";

export class AlunoService {
  static async getAll(): Promise<Aluno[]> {
    const response = await api.get<Aluno[]>("/alunos");
    return response.data;
  }

  static async getById(id: number): Promise<Aluno> {
    const response = await api.get<Aluno>(`/alunos/${id}`);
    return response.data;
  }

  static async create(aluno: Omit<Aluno, "id">) {
    const response = await api.post("/alunos", aluno);
    return response.data;
  }

  static async update(aluno: Aluno) {
    const response = await api.put(`/alunos/${aluno.id}`, aluno);
    return response.data;
  }

  static async delete(id: number) {
    await api.delete(`/alunos/${id}`);
  }
}
