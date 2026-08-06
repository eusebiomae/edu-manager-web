import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function UserMenu() {
  return (
    <div className="flex items-center gap-3">

      <Avatar>
        <AvatarFallback>EA</AvatarFallback>
      </Avatar>

      <div className="flex flex-col leading-tight ">
        <p className="font-semibold text-foreground">
          Eusebio
        </p>

        <span className="text-sm text-muted-foreground">
          Desenvolvedor
        </span>
      </div>

    </div>
  );
}
