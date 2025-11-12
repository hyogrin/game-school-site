import Card from './Card'

type Node = { name: string; title?: string; children?: Node[] }

export default function OrgChart({ root }: { root: Node }) {
  return (
    <Card>
      <div className="space-y-4">
        {renderNode(root, 0)}
      </div>
    </Card>
  )
}

function renderNode(node: Node, depth: number): JSX.Element {
  return (
    <div key={node.name} className="ml-0">
      <div className="flex items-center gap-2">
        <div className="font-semibold">{node.name}</div>
        {node.title && <div className="text-xs text-gray-600">{node.title}</div>}
      </div>
      {node.children && node.children.length > 0 && (
        <div className="border-l ml-4 pl-4 mt-2 space-y-2">
          {node.children.map((c) => renderNode(c, depth + 1))}
        </div>
      )}
    </div>
  )
}
