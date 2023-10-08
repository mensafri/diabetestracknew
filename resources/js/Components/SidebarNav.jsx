import { Link } from "@inertiajs/react";

export default function ItemSidebar ({ path, title }) {
    return (
      <Link href={route({path})} >
        {title}
      </Link>
    );
  }
