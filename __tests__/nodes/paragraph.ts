import { convert } from '../../src';

it('render text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render bold text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'bold',
          marks: [
            {
              object: 'mark',
              type: 'bold',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render italic text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'italic',
          marks: [
            {
              object: 'mark',
              type: 'italic',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render underlined text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'underlined',
          marks: [
            {
              object: 'mark',
              type: 'underlined',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render all marks text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'bold, italic, underlined',
          marks: [
            {
              object: 'mark',
              type: 'bold',
              data: {},
            },
            {
              object: 'mark',
              type: 'italic',
              data: {},
            },
            {
              object: 'mark',
              type: 'underlined',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render code text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          text: 'Hello ',
          marks: [],
        },
        {
          object: 'text',
          text: 'code',
          marks: [
            {
              object: 'mark',
              type: 'code',
              data: {},
            },
          ],
        },
        {
          object: 'text',
          text: ' hello',
          marks: [],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

/**
 * slate < 0.46
 */

it('render slate < 0.46 text', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Hello',
              marks: [],
            },
          ],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('merge slate < 0.46 text with mark', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Of course, you can edit your text at any moment and make it ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'bold',
              marks: [
                {
                  object: 'mark',
                  type: 'bold',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: ', ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'italic',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: ' or ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'underlined',
              marks: [
                {
                  object: 'mark',
                  type: 'underlined',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: '.',
              marks: [],
            },
          ],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});

it('render slate < 0.46 without crashing', () => {
  const slateJSON = [
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'This guide provides you with everything you need to know about the text editor and page styles. It may change, depending on the added themes or possible updates.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Images',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-two',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Story cover picture',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'You can add a cover picture to any stories.\nBy clicking on the wheel next to the save button on the "Edit" page, you will open the settings section.\nIn this column, you will be able to add a cover picture.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'image',
      data: {
        src: 'https://i.goopics.net/kwlWG.jpg',
      },
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'This is a full width image.\nFor now, we recommend you use an image host such ',
              marks: [],
            },
          ],
        },
        {
          object: 'inline',
          type: 'link',
          data: {
            href: 'https://goopics.net/',
          },
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Goopics',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: ".\nDon't worry, ",
              marks: [],
            },
            {
              object: 'leaf',
              text: 'we will add a picture uploader very soon.',
              marks: [
                {
                  object: 'mark',
                  type: 'bold',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-two',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Image gallery',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Coming soon...',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'This is an H1',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, diam sit amet rhoncus ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis. Fusce et ipsum et nulla tristique facilisis.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-two',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '\nThis is an H2',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-three',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'This is an H3',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Aliquam sodales neque at diam efficitur, eu venenatis ipsum dapibus. Maecenas id condimentum ligula. Fusce purus odio, malesuada tincidunt sapien vel, fringilla pulvinar eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean ipsum felis, aliquam ut purus id, cursus laoreet sem.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Drop cap',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Coming soon...',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Quoting',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'block-quote',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Code Blocks',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Coming soon...',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'You will be able to customize your theme by adding code lines in this section.\nAvailable very soon.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Lists',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-two',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Unordered Lists',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'You can create unordered lists, typically rendered as a bulleted list.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'bulleted-list',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum luctus elit ut metus feugiat maximus.\nMorbi tempus purus.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Integer sagittis ex at odio feugiat lobortis.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Ut sit amet quam ac erat sollicitudin laoreet ornare ac neque.\nPraesent dignissim nulla interdum, venenatis mi eget, eleifend urna.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Maecenas egestas est eget fringilla mollis.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Cras et nisl ut enim pellentesque dignissim.',
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-two',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '\nOrdered Lists',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'You also can create ordered lists, typically rendered as a numbered list.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'numbered-list',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nVestibulum luctus elit ut metus feugiat maximus.\nMorbi tempus purus.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Integer sagittis ex at odio feugiat lobortis.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Ut sit amet quam ac erat sollicitudin laoreet ornare ac neque.\nPraesent dignissim nulla interdum, venenatis mi eget, eleifend urna.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Maecenas egestas est eget fringilla mollis.',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Cras et nisl ut enim pellentesque dignissim.',
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Text edition',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Of course, you can edit your text at any moment and make it ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'bold',
              marks: [
                {
                  object: 'mark',
                  type: 'bold',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: ', ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'italic',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: ' or ',
              marks: [],
            },
            {
              object: 'leaf',
              text: 'underlined',
              marks: [
                {
                  object: 'mark',
                  type: 'underlined',
                  data: {},
                },
              ],
            },
            {
              object: 'leaf',
              text: '.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'You can use shortcuts for that: ',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'bulleted-list',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Bold: ctrl+b (cmd+b on mac)',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Italic: ctrl+i (cmd+i on mac)',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'block',
          type: 'list-item',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'Underlined: ctrl+u (cmd+u on mac)',
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-two',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Links',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Easily add links to your text by highlighting it and clicking on the ',
              marks: [],
            },
          ],
        },
        {
          object: 'inline',
          type: 'link',
          data: {
            href: 'https://app.sigle.io/sigleapp.id.blockstack/L7I4iV6bYQ8WYvuT3RcoM',
          },
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: '"link"',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: ' button in the text editor.',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Videos',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Coming soon...',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'heading-one',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: '\nAudio',
              marks: [],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: 'Coming soon...',
              marks: [
                {
                  object: 'mark',
                  type: 'italic',
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    },
    {
      object: 'block',
      type: 'paragraph',
      data: {},
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: "\nDon't forget to share your blog with us by mentioning ",
              marks: [],
            },
          ],
        },
        {
          object: 'inline',
          type: 'link',
          data: {
            href: 'https://twitter.com/sigleapp',
          },
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: '@sigleapp',
                  marks: [],
                },
              ],
            },
          ],
        },
        {
          object: 'text',
          leaves: [
            {
              object: 'leaf',
              text: ' on Twitter! 🙂',
              marks: [],
            },
          ],
        },
      ],
    },
  ];
  expect(convert(slateJSON)).toMatchSnapshot();
});
