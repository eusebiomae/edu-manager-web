"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Aluno } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AlunoColumnsProps {
  onEdit: (aluno: Aluno) => void;
  onDelete: (aluno: Aluno) => void;
}

export function createAlunoColumns({
  onEdit,
  onDelete,
}: AlunoColumnsProps): ColumnDef<Aluno>[] {
  return [
    {
      accessorKey: "id",
      header: "ID",
    },

    {
      accessorKey: "nome",

      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },

    {
      accessorKey: "email",
      header: "E-mail",
    },

    {
      accessorKey: "idade",

      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Idade
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },

    {
      id: "actions",

      enableHiding: false,

      cell: ({ row }) => {
        const aluno = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit(aluno)}>
                Editar
              </DropdownMenuItem>

              <DropdownMenuItem
                className="text-destructive"
                onClick={() => onDelete(aluno)}
              >
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
}
