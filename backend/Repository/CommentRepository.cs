
using backend.Data;
using backend.Dtos.Comment;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDBContext _context;

        public CommentRepository(ApplicationDBContext context)
        {
            _context = context;

        }

        public async Task<Comment> CreateAsync(Comment commentModel)
        {
            await _context.Comments.AddAsync(commentModel);
            await _context.SaveChangesAsync();
            return commentModel;
        }

        public async Task<Comment?> DeleteAsync(int id)
        {
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
            {
                return null;
            }
            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();
            return comment;
        }

        public async Task<bool> ExistComment(int id)
        {
            return await _context.Comments.AnyAsync(c => c.Id == id);
        }

        public async Task<List<Comment>> GetAllAsync()
        {
            return await _context.Comments.Include(c => c.AppUser).ToListAsync();
        }

        public async Task<Comment?> GetByIdAsync(int id)
        {
            var comment = await _context.Comments.Include(c => c.AppUser).FirstOrDefaultAsync(c => c.Id == id);
            if (comment == null)
            {
                return null;
            }
            return comment;
        }

        public async Task<Comment?> UpdateAsync(int id, UpdateCommentDto commentDto)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.Id == id);
            if (comment == null)
            {
                return null;
            }

            comment.Title = commentDto.Title;
            comment.Content = commentDto.Content;
            await _context.SaveChangesAsync();
            return comment;
        }
    }
}