import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_information_s';
  info: {
    displayName: 'seoInformation ';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

export interface ConfigSocialLink extends Schema.Component {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'socialLink';
    icon: 'headphone';
    description: '';
  };
  attributes: {
    SocialMedia: Attribute.Enumeration<
      ['github', 'youtube', 'twitter', 'facebook']
    > &
      Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutServicesPreview extends Schema.Component {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'Services Preview';
    icon: 'command';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.services-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface LayoutPageInfo extends Schema.Component {
  collectionName: 'components_layout_page_infos';
  info: {
    displayName: 'PageInfo';
    description: '';
  };
  attributes: {
    Content: Attribute.Blocks;
    Cover: Attribute.Media<'images', true>;
    SeoField: Attribute.Component<'seo.seo-information'>;
    excludedCurses: Attribute.Relation<
      'layout.page-info',
      'oneToMany',
      'api::course.course'
    >;
  };
}

export interface LayoutNewsletterForm extends Schema.Component {
  collectionName: 'components_layout_newsletter_forms';
  info: {
    displayName: 'newsletterForm';
    icon: 'brush';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.Text;
  };
}

export interface LayoutMission extends Schema.Component {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    OurMission: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    showLogo: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    icon: 'cube';
    description: '';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images', true>;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutFeaturedCourse extends Schema.Component {
  collectionName: 'components_layout_featured_courses';
  info: {
    displayName: 'Featured Course';
    icon: 'crop';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featured-course',
      'oneToOne',
      'api::course.course'
    >;
    Heading: Attribute.String;
    announcement: Attribute.Text;
  };
}

export interface BlogPostsSelection extends Schema.Component {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'filter';
  };
  attributes: {
    heading: Attribute.String;
    featuredPosts: Attribute.Relation<
      'blog.posts-selection',
      'oneToMany',
      'api::post.post'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-information': SeoSeoInformation;
      'config.social-link': ConfigSocialLink;
      'layout.services-preview': LayoutServicesPreview;
      'layout.page-info': LayoutPageInfo;
      'layout.newsletter-form': LayoutNewsletterForm;
      'layout.mission': LayoutMission;
      'layout.link': LayoutLink;
      'layout.hero': LayoutHero;
      'layout.featured-course': LayoutFeaturedCourse;
      'blog.posts-selection': BlogPostsSelection;
    }
  }
}
