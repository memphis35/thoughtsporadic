import './Wall.css';
import Post from './Post';

function Wall({postResponse}) {
    const posts = '[\n' +
        '  {\n' +
        '    "id": 100001,\n' +
        '    "address": "/var/thoughs/death_sentence_there_are_no_good_solutions",\n' +
        '    "title": "Death sentence: there are no good solutions",\n' +
        '    "text": "The prospect of a death penalty repeal has never gotten as far along in Ohio as it has this year. So it seemed like a great time to bring together Jennifer Pryor, Director of Organizing & Community Outreach at Ohioans to Stop Executions, and Sarah Craft, Death Penalty Program Director at EJUSA. They discussed the evolution of the death penalty movement over the past 17 years.\\nTo put it plainly, a lot has changed. In 2005, leadership that supported executions. Today, national and local leaders vocally condemn capital punishment. Executions have decreased to just over a third of what the numbers were in the past.\\nNational support for repealing the death penalty has grown every year. Many more people are being vocal about being against executions fundamentally. Historically, a call for innocence or obvious racial bias has dictated the wave of support.\\nThere’s a clearer understanding that racial disparities in the death penalty run throughout the criminal legal system. Visit our YouTube Channel to listen to their conversation.\\n",\n' +
        '    "image": "https://ejusa.org/wp-content/uploads/Death-Penalty-Movement-blog.png"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 100002,\n' +
        '    "address": "/var/thoughs/what_feminism_means_today",\n' +
        '    "title": "What feminism means today",\n' +
        '    "text": " Are you a feminist? “Yes,” some readily answer. Others grimace and deny any involvement with that “bra-burning, man-hating” movement.\\nTo Cynthia de las Fuentes, PhD, past-president of APA\'s Div. 35 (Society for the Psychology of Women), such negative perceptions derive from media distortion-not the movement\'s mission of equality for the sexes at work and at home. What\'s more, many young women--and men--don\'t realize that equality has yet to be achieved, she says.\\nShe laments the division\'s relative absence of men, minorities and members younger than 30--the last of which is a trend across all APA divisions.\\n\\"We\'ve had trouble communicating feminism\'s continuing relevance to young people and people of color,\\" says de las Fuentes, an associate professor at San Antonio-based Our Lady of the Lake University. \\"Most current Div. 35 members were active in women\'s rights in the \'70s, and they still are.\\"\\n",\n' +
        '    "image": "https://www.dictionary.com/e/wp-content/uploads/2021/03/20210301_feminism_1000x700-790x310.jpg"\n' +
        '  },\n' +
        '  {\n' +
        '    "id": 100003,\n' +
        '    "address": "/var/thoughs/revenge_cheating_what_you_need_to_know",\n' +
        '    "title": "Revenge Cheating: What You Need to Know",\n' +
        '    "text": "If you’re considering revenge cheating, you must stop asking yourself why. What is it that you want to achieve? Are you hoping to make your ex jealous? Do you want to make them feel bad? Or are you looking for some satisfaction from making them suffer?\\nIf the answer is yes, then think again. Because one thing is for sure: if you cheat on your partner to get back at them for cheating on you, it won’t work.\\nRevenge Cheating Is Not Justifiable\\n",\n' +
        '    "image": "https://thepleasantrelationship.com/wp-content/uploads/2022/09/Revenge-Cheating-–-Definition-Signs-Types-and-How-to-Avoid-it.jpg"\n' +
        '  }\n' +
        ']';
    const reactPosts = JSON.parse(posts).map(post => <Post key={post.id}
                                        path={post.address}
                                        title={post.title}
                                        imageSrc={post.image}
                                        text={post.text} />);
    return (
        <div className='wall'>{reactPosts}</div>
    );
}

export default Wall;