import React from 'react';
import styled from 'styled-components';

import Title from 'components/Title';
import Card from 'components/Card';

import { story } from 'data';

const FlexWrap = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

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
                {story.map((content, i) => (
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
        <FlexWrap>
            <Title>Story</Title>
            {story.map((content, i) => (
                <Card
                    image={content.url}
                    tag={content.tag}
                    title={content.title}
                    summary={content.summary}
                    key={i}
                />
            ))}
        </FlexWrap>
    );
};

export default Story;
