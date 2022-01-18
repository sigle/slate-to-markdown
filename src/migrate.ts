import { Value, Text } from 'slate';
/**
 * Inspired by https://gist.github.com/webel/545f229fe79c2176dbaed9023de46e12
 *
 * Slate's schema has changed vastly under 2 years. The text editor is still
 * a better candidate than the other OSS editors out there, so we must live
 * with the major changes.
 *
 * Migrate a schema from the old version 0.33 to current version 0.6x
 * Inspiration taken wholly from
 * https://github.com/react-page/react-page/blob/b6c83a8650cfe9089e0c3eaf471ab58a0f7db761/packages/plugins/content/slate/src/migrations/v004.ts
 */

const migrateTextNode = (oldNode: any) => {
  const leaves = {
    text: oldNode.text,
    ...oldNode.marks?.reduce(
      (acc: any, mark: any) => ({
        ...acc,
        // This is needed as it's not possible to customize via the remark-slate options https://github.com/hanford/remark-slate/issues/49
        [mark.type === 'underlined' ? 'strikeThrough' : mark.type]: true,
      }),
      {}
    ),
  };
  return leaves;
};

const migrateLinkNode = (node: any) => {
  return {
    link: node.data.href,
    type: node.type,
    children: node.nodes?.map(migrateNode).flat() ?? [],
  };
};

const migrateImageNode = (node: any) => {
  return {
    link: node.data.src ? encodeURI(node.data.src) : '',
    caption: '',
    type: node.type,
    children: [],
  };
};

// List items needs to be wrapped in a paragraph
const migrateListItemNode = (node: any) => {
  return {
    data: node.data ?? {},
    type: 'list_item',
    children: [
      {
        type: 'paragraph',
        children: node.nodes?.map(migrateNode).flat() ?? [],
      },
    ],
  };
};

const migrateElementNode = (node: any) => {
  return {
    data: node.data ?? {},
    type: node.type,
    children: node.nodes?.map(migrateNode).flat() ?? [],
  };
};

const migrateNode = (oldNode: any) => {
  if (oldNode.object === 'text') {
    return migrateTextNode(oldNode);
  } else if (oldNode.object === 'inline' && oldNode.type === 'link') {
    return migrateLinkNode(oldNode);
  } else if (oldNode.object === 'block' && oldNode.type === 'image') {
    return migrateImageNode(oldNode);
  } else if (oldNode.object === 'block' && oldNode.type === 'list-item') {
    return migrateListItemNode(oldNode);
  } else {
    return migrateElementNode(oldNode);
  }
};

/**
 * Migration of data < slate 0.46, remove the leaves property which has been
 * removed in 0.46.
 * For performance, only call Slate if the leaves property is detected.
 */
const removeLeaves = (oldNode: any) => {
  let newNodes: any[] = [];
  oldNode.nodes.forEach((node: any) => {
    // Inline can contain an array of node that needs to be migrated
    if (node.object === 'inline' && node.nodes) {
      newNodes.push(removeLeaves(node));
      return;
    } else if (node.object === 'text' && node.leaves) {
      newNodes = newNodes.concat(
        Text.createList(node.leaves)
          .toArray()
          .map((data) => data.toJSON())
      );
      return;
    } else {
      newNodes.push(node);
    }
  });
  console.log(
    JSON.stringify(oldNode.nodes, null, 2),
    JSON.stringify(newNodes, null, 2),
    JSON.stringify(
      (
        Value.fromJSON({
          object: 'value',
          document: { object: 'document', data: {}, nodes: [oldNode] },
        }).toJSON() as any
      ).document!.nodes![0]!.nodes,
      null,
      2
    )
  );
  oldNode.nodes = newNodes;
  return oldNode;
};

export const migrateSchema = (nodes: any) => {
  return nodes.map(removeLeaves).map(migrateNode);
};
