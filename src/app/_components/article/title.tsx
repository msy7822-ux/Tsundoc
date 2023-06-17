import { tv } from "tailwind-variants";

type Props = {
  title: string;
};

const titleTextStyle = tv({
  base: "text-sm",
});

export function ArticleTitle({ title }: Props) {
  return <h3 className={titleTextStyle({})}>{title}</h3>;
}
