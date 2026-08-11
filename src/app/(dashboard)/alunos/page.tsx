"use client";

import { useMemo, useState, useCallback } from "react";

import { DataTable } from "@/components/data-table/DataTable";

import { createAlunoColumns } from "@/components/data-table/columns/aluno-columns";

import { useAlunos } from "@/hooks/useAlunos";
import { useAlunoMutations } from "@/hooks/useAlunoMutations";

import { Aluno } from "@/types";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export default function AlunosPage() {
  const { data: alunos, isLoading, isError, error } = useAlunos();

  const { deleteAluno } = useAlunoMutations();

  const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null);

  const handleEdit = useCallback((aluno: Aluno) => {
    setSelectedAluno(aluno);

    console.log("Editar aluno:", aluno);
  }, []);

  const handleDelete = useCallback(
    (aluno: Aluno) => {
      const confirmed = window.confirm(
        `Deseja realmente excluir o aluno "${aluno.nome}"?`,
      );

      if (!confirmed) {
        return;
      }

      deleteAluno.mutate(aluno.id);
    },
    [deleteAluno],
  );

  const columns = useMemo(
    () =>
      createAlunoColumns({
        onEdit: handleEdit,
        onDelete: handleDelete,
      }),
    [handleEdit, handleDelete],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Alunos</h1>

          <p className="mt-2 text-muted-foreground">Gestão de alunos.</p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Aluno
        </Button>
      </div>

      {isLoading && (
        <div className="rounded-xl border bg-card p-6">
          Carregando alunos...
        </div>
      )}

      {isError && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-6">
          <p className="font-medium text-destructive">
            Não foi possível carregar os alunos.
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {error instanceof Error
              ? error.message
              : "Erro ao consultar a API."}
          </p>
        </div>
      )}

      {!isLoading && !isError && (
        <DataTable
          columns={columns}
          data={alunos ?? []}
          searchColumn="nome"
          searchPlaceholder="Pesquisar aluno..."
        />
      )}
    </div>
  );
}
