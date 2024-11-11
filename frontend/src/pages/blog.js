import React from 'react'
import { NavbarCommon } from '../common/navbarCommon'
import CustomBreadcrumbs from '../common/breadcrumbs'
import Footer from './footer'

const Blog = () => {
    return (
        <div className='blog_main'>
            <div className='Product_Header'>
                <NavbarCommon />
                <div className='container breadcums'>
                    <CustomBreadcrumbs
                        heading="Blog"
                        breadcrumbItems={[
                            { label: "home", href: "/" },
                            { label: "blog" }
                        ]}
                    />
                </div>
            </div>
            <div className='container blog_wrapper'>
                <div className='blog_img'>
                    <img src="/assets/blog/1.jpeg" alt="Myself" />
                </div>
                <div className='blog_content'>
                    <p>Enim nulla reprehenderit non quis. Enim Lorem incididunt irure occaecat. Ullamco nostrud reprehenderit minim labore ex fugiat cupidatat minim minim eiusmod sint minim. Laborum anim proident tempor laborum elit commodo cillum sit ullamco cupidatat nulla est. Enim mollit sunt officia non occaecat reprehenderit ad tempor quis sint.</p>
                    <p> Est commodo consequat duis occaecat sint magna do nisi deserunt. Sit occaecat non elit amet deserunt nisi esse. Aliquip laboris quis mollit mollit esse velit proident labore Lorem deserunt ex cupidatat eiusmod Lorem. Est esse quis laboris deserunt minim et mollit adipisicing culpa. Veniam do nostrud dolore ipsum consectetur officia incididunt nostrud esse aliqua non sit elit non. Laboris non duis cupidatat eu fugiat fugiat do Lorem reprehenderit eiusmod minim labore. Nisi occaecat sit eu dolor deserunt cillum excepteur duis nisi incididunt officia.</p>
                    <p>Cupidatat laboris elit ullamco excepteur. Ut fugiat aliqua proident tempor est. Incididunt sint nisi occaecat proident elit duis est consectetur laborum enim ut. Ut ut consequat ex aute qui adipisicing veniam laborum minim amet sint.</p>
                    <p> Officia reprehenderit Lorem est minim est dolore officia elit officia. Eiusmod fugiat irure nostrud ea irure cillum irure et elit ut. Aliqua sint aliquip veniam et in.</p>
                    <p>Dolore tempor elit nulla fugiat pariatur enim cillum fugiat. Occaecat aliquip deserunt cupidatat officia est nostrud fugiat consequat. Nulla incididunt commodo aliqua ea mollit est sunt nulla laboris irure. Irure Lorem nostrud eu dolore est. Culpa esse esse ad magna sit quis excepteur aute reprehenderit est ut est. Esse aliquip pariatur magna fugiat voluptate laborum.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog