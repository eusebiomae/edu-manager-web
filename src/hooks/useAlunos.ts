"use client";

import { useQuery } from "@tanstack/react-query";
import { AlunoService } from "@/services/aluno.service";

export function useAlunos() {
  return useQuery({
    queryKey: ["alunos"],
    queryFn: AlunoService.getAll,
  });
}
