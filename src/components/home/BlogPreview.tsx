import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';

const BlogPreview = () => {
  // Get only the latest 3 blog posts
  const latestPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay informed with our latest articles on digital transformation, data management,
              and strategic insights.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary-600 font-medium mt-4 md:mt-0 hover:text-primary-700"
          >
            View all articles <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className="card group h-full flex flex-col">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-700">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 mt-auto"
                >
                  Read more <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;