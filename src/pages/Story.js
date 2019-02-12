import React from 'react';
import Title from 'components/Title';
import Card from 'components/Card';

import { today } from 'data';

const Story = () => (
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

export default Story;
