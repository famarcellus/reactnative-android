import {MessagePreview, Recipient} from '../types/messages';

function formatDate(currentDate: Date) {
  const theMonth = currentDate.getMonth();
  const theDate = currentDate.getDate();
  const formattedDate = `${theMonth.toLocaleString()}  ${theDate.toLocaleString()}`;
  return formattedDate;
}

let steveLastMsgDate: Date | string = new Date();
steveLastMsgDate.setDate(3);

steveLastMsgDate = formatDate(steveLastMsgDate);

export const messagePreviews: MessagePreview[] = [
  {
    contactId: 214,
    name: 'Steve Rogers',
    profileImgUrl:
      'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/350?cb=20190423175339',
    latestMessagePreview:
      'Hey man. How was your thanksgiving? Hope it was amazing because I had a great time spending it with my family and friends.',
    dateSent: steveLastMsgDate,
    hasBeenRead: false,
  },
  {
    contactId: 481,
    name: 'Bill Gates',
    profileImgUrl:
      'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQi4a8NzG1ocCbgUUZxxDLocQwDQvhod4gHC3aRRg3juK0LDsZHECn7AwMJq8WUmPFLai9IJhY5YWNLRys',
    latestMessagePreview:
      'Just created a new programming language that you should definitely checkout!',
    dateSent: steveLastMsgDate,
    hasBeenRead: false,
  },
  {
    contactId: 123,
    name: 'Keanu Reeves',
    profileImgUrl:
      'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR-5yAf2rXao5H-YDD5SnYBa79W1ZACGkuzqnH9OzJLAoA4v-SfDWeXieOdSks56tnx83vVG5C6x8Dvs20',
    latestMessagePreview:
      'What did you think about my latest movie? Did you love it?',
    dateSent: steveLastMsgDate,
    hasBeenRead: false,
  },
];

// export const messages: Recipient = {
//     con
// };
