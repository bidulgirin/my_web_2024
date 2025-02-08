import React from 'react';
import ToyProjectLists from './ToyProjectLists';

const ToyProjectContainer = () => {
    return (
        <section>
            <div className='gf_contentArea'>
                <div className='gf_title'>
                    Toy <br />
                    project
                </div>
                <div className='gf_desc'>공부/클론연습</div>
                <ToyProjectLists />
            </div>
        </section>
    );
};

export default ToyProjectContainer;
