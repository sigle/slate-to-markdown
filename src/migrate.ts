import { Text } from 'slate';
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
        [mark.type]: true,
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
    // Inline and block can contain an array of node that needs to be migrated
    if ((node.object === 'inline' || node.object === 'block') && node.nodes) {
      newNodes.push(removeLeaves(node));
      return;
    }

    if (node.object === 'text' && node.leaves) {
      newNodes = newNodes.concat(
        Text.createList(node.leaves)
          .toArray()
          .map((data) => data.toJSON())
      );
      return;
    }

    newNodes.push(node);
  });

  oldNode.nodes = newNodes;
  return oldNode;
};

/**
 * Remove the new line char that can be in the titles as it can break the markdown.
 */
const fixNewLineTitle = (oldNode: any) => {
  if (
    oldNode.object === 'block' &&
    (oldNode.type === 'heading-one' ||
      oldNode.type === 'heading-two' ||
      oldNode.type === 'heading-three')
  ) {
    oldNode.nodes = oldNode.nodes.map((node: any) =>
      node.leaves
        ? {
            ...node,
            leaves: node.leaves.map((leaf: any) =>
              leaf.text.replace(/^\n/, '')
            ),
          }
        : node
    );
  }
  return oldNode;
};

export const migrateSchema = (nodes: any) => {
  nodes = nodes.map(fixNewLineTitle);
  return nodes.map(removeLeaves).map(migrateNode);
};
