import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import NotFound from './NotFound';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === postId);
  
  if (!post) {
    return <NotFound />;
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 md:pt-40 md:pb-32 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${post.coverImage})` 
        }}
      >
        <div className="container-custom text-white relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6 space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-700 text-white">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-300 mb-8">
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Tag size={16} className="mr-2" />
                {post.readTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-700 mb-8">{post.excerpt}</p>
                
                {post.content.map((section, index) => (
                  <div key={index} className="mb-10">
                    {section.heading && (
                      <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                    )}
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 text-gray-700">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-4">Share this article:</span>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Share on Twitter">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Share on Facebook">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Share on LinkedIn">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Copy link">
                        <Share2 className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">Tags:</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Digital
                    </span>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-6">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt={post.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Senior Digital Transformation Consultant at DigitalEdge with over 10 years of experience
                      helping organizations navigate complex digital challenges.
                    </p>
                    <div className="flex space-x-2">
                      <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Related Posts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="flex items-start gap-4">
                        <img 
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">
                            <Link to={`/blog/${relatedPost.id}`} className="hover:text-primary-600 transition-colors">
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <span className="text-xs text-gray-500">{relatedPost.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-6">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog?category=Digital%20Transformation" className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors">
                        <span>Digital Transformation</span>
                        <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1">8</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog?category=Data%20Management" className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors">
                        <span>Data Management</span>
                        <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1">5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog?category=Strategy" className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors">
                        <span>Strategy</span>
                        <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1">4</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog?category=Technology" className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors">
                        <span>Technology</span>
                        <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1">6</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-primary-800 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
                  <p className="text-gray-300 mb-4">
                    Stay updated with our latest insights and news.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full btn bg-white text-primary-800 hover:bg-gray-100"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to={`/blog/${relatedPosts[0]?.id || ''}`} className="flex items-start group">
              <ArrowLeft size={20} className="mr-4 mt-1 group-hover:-translate-x-2 transition-transform text-gray-500" />
              <div>
                <span className="block text-sm text-gray-500 mb-1">Previous Article</span>
                <h4 className="font-medium group-hover:text-primary-600 transition-colors">
                  {relatedPosts[0]?.title || 'Back to Blog'}
                </h4>
              </div>
            </Link>
            
            <Link to={`/blog/${relatedPosts[1]?.id || ''}`} className="flex items-start justify-end text-right group">
              <div>
                <span className="block text-sm text-gray-500 mb-1">Next Article</span>
                <h4 className="font-medium group-hover:text-primary-600 transition-colors">
                  {relatedPosts[1]?.title || 'More Articles'}
                </h4>
              </div>
              <ArrowRight size={20} className="ml-4 mt-1 group-hover:translate-x-2 transition-transform text-gray-500" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;