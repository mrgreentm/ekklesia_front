import { cn } from "ekklesia/lib/utils"
import { Button } from "ekklesia/components/ui/button"
import { Input } from "ekklesia/components/ui/input"
import { Label } from "ekklesia/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Realize o login em sua conta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Insira seu e-mail abaixo para realizar o login em sua conta
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email@exemplo.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Não tem uma conta?{" "}
        <a href="#" className="underline underline-offset-4">
          Cadastre-se
        </a>
      </div>
    </form>
  )
}
