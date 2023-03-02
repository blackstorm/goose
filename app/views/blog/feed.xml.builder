xml.instruct! :xml, version: "1.0"
xml.rss version: "2.0" do
  xml.channel do
    xml.title @title
    xml.link root_url

    @articles.each do |post|
      xml.item do
        xml.title post.title
        xml.link article_url(post)
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.guid article_url(post)
        xml.description post.content_to_html
      end
    end
  end
end