import React from 'react';

import Title from 'components/Title';
import Card from 'components/Card';

import { today } from 'data';

/*
class Story extends React.Component {
    showDetail = e => {
        console.log(e.currentTarget);
    };
    render() {
        return (
            <section>
                <Title>Story</Title>
                <div onClick={this.showDetail}>hi</div>
                {today.map((content, i) => (
                    <Card
                        detail={this.showDetail}
                        image={content.url}
                        tag={content.tag}
                        title={content.title}
                        summary={content.summary}
                        key={i}
                    />
                ))}
            </section>
        );
    }
}
*/

const Story = () => {
    return (
        <section>
            <Title>Story</Title>
            {today.map((content, i) => (
                <Card
                    image={content.url}
                    tag={content.tag}
                    title={content.title}
                    summary={content.summary}
                    key={i}
                />
            ))}
        </section>
    );
};

export default Story;
