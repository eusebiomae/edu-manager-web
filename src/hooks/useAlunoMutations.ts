"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlunoService } from "@/services/aluno.service";

export function useAlunoMutations() {
  const queryClient = useQueryClient();

  const deleteAluno = useMutation({
    mutationFn: (id: number) => AlunoService.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["alunos"],
      });
    },
  });

  const createAluno = useMutation({
    mutationFn: AlunoService.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["alunos"],
      });
    },
  });

  const updateAluno = useMutation({
    mutationFn: AlunoService.update,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["alunos"],
      });
    },
  });

  return {
    createAluno,
    updateAluno,
    deleteAluno,
  };
}
